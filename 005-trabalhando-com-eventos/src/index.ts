import { EventEmitter } from 'node:events';

const event = new EventEmitter();

const eventOla = (message: string, name: string) => {
  console.log(message, name);
};

//event.addListener('ola', eventOla);
event.once('ola', eventOla);

event.emit('ola', 'deu bom', 'Leo');
