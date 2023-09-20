import { EventEmitter } from 'node:events';

const event = new EventEmitter();

const eventOla = (message: string, name: string) => {
  console.log(message, name);
};

event.addListener('ola', eventOla);
event.on('ola', eventOla);
event.once('ola', eventOla);

setInterval(() => {
  console.log(event.listenerCount('ola'));
  event.emit('ola', 'deu bom', 'Leo');
}, 1000);
