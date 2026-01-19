import {Context, Health} from 'core/context';
import {Event} from 'core/event';
import {match, partial} from 'variant';
import chance from './chance';
import {genEvent} from './event';
import {MAXIMUM_EVENT_COUNT, MINIMUM_EVENT_COUNT} from './defaults';


export function genTimeline(originalContext: Context, numEvents?: number) {
    const eventCount = numEvents ?? chance.integer({min: MINIMUM_EVENT_COUNT, max: MAXIMUM_EVENT_COUNT});

    let timeline: Event[] = []; 
    let context = originalContext;

    console.log('Generating timeline for', eventCount, 'events.')
    for (let i = 0; i < eventCount; i++) {
        let event = genEvent();

        match(event, partial({
            Breakup({outcome}) {
                if (outcome === 'violent') {
                    context.health = Health.Injured;
                }
            },
            Mugged({outcome}) {
                match(outcome, partial({
                    died() {
                        context.health = Health.Dead;
                    },
                    injured() {
                        context.health = Health.Injured;
                    },
                    default() {},
                }))
            },
            default() {},
        }));

        timeline.push(event);

        if (context.health === 'Dead') {
            console.log('Found an event resulting in death', event);
            break;
        }
    }

    return timeline;
}