import {Event} from '../core/event';
import {genEvent} from './event';
import {types} from 'variant';

test('gen specific event', () => {
    const event = genEvent('Ancestor');

    expect(event.type).toBe('Ancestor');
})


test('randomEventGen', () => {
    const event = genEvent();

    expect(types(Event)).toContain(event.type);
})

