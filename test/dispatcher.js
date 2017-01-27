import test from 'ava';
import Dispatcher from '../src/Dispatcher';
import sinon from 'sinon';

test('that it can dispatch events', t => {
    let events = new Dispatcher;
    let handler = sinon.spy();

    events.listen('some-event', handler);
    events.listen('some-event', handler);

    events.fire('some-event');

    t.truthy(handler.calledTwice);
});

