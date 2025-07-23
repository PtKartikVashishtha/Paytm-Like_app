import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3005 });
const clients = new Map<string, any>(); // Map userId to ws

wss.on('connection', (ws, req) => {
  let userId: string;

  ws.on('message', (msg) => {
    const data = JSON.parse(msg.toString());
    if (data.type === "register") {
      userId = data.userId;
      clients.set(userId, ws);
    }
  });

  ws.on('close', () => {
    clients.delete(userId);
  });
});

export const pushTransactionUpdate = (userId: string, payload: any) => {
  const client = clients.get(userId);
  if (client && client.readyState === 1) {
    client.send(JSON.stringify(payload));
  }
};
