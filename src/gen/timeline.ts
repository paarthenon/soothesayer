import {Context, Health} from 'core/context';
import {Event} from 'core/event';
import {match, partial} from 'variant';
import chance from './chance';
import {genEvent} from './event';


export function genTimeline(originalContext: Context, numEvents?: number) {
    const goal = numEvents ?? chance.integer({min: 3, max: 5});

    let timeline: Event[] = []; 
    let context = originalContext;

    console.log('Generating timeline for', goal, 'events.')
    for (let i = 0; i < goal; i++) {
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