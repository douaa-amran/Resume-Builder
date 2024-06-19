import { connect } from "amqplib";

export const sendMessageToQueue = async (queue, messageContent) => {
  try {
    const connection = await connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, {
      durable: true,
    });

    channel.sendToQueue(queue, Buffer.from(messageContent));

    console.log(`Message sent to RabbitMQ queue '${queue}': ${messageContent}`);
  } catch (error) {
    console.error("Error sending message to RabbitMQ:", error);
  }
};
