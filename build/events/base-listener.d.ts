import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    private client;
    private ackWait;
    constructor(client: Stan);
    subscriptionOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
export {};
