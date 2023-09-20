import { EventEmitter } from 'node:events';

const event = new EventEmitter();

event.addListener('ola', (message, name) => {
  console.log(2, message, name);
});

event.emit('ola', 'deu bom', 'Leo');
