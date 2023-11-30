const { models } = require('../libs/sequelize');
const nodemailer = require('nodemailer');

// Configura el transporte de correo 
const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'afabf3c8e3021c',
        pass: '1cca6c98796810',
    },
});

async function index() {
    const events = await models.event.findAll();
    return events;
}

async function store(body) {
    const event = await models.event.create(body);

    // Enviar correo electrónico
    sendEmail('Nuevo evento creado', `Se ha creado un nuevo evento: ${event.nombrePais}`);

    return event;
}

async function show(id) {
    const event = await models.event.findByPk(id);
    return event;
}

async function update(id, body) {
    const [affectedRows, [updatedEvent]] = await models.event.update(body, {
        where: {
            id,
        },
        returning: true,
    });

    return updatedEvent;
}

async function destroy(id) {
    const event = await models.event.findByPk(id);
    const deletedEvent = await models.event.destroy({
        where: {
            id,
        },
        returning: true,
    });

    if (deletedEvent) {
        return event;
    }

    return null;
}

// Función para enviar correo electrónico
function sendEmail(subject, text) {
    const mailOptions = {
        from: 'andres930500@gmail.com', 
        to: 'andres930500@gmail.com', 
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
        } else {
            console.log('Correo electrónico enviado:', info.response);
        }
    });
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy,
};
