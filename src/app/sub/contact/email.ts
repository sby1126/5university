import nodemailer from 'nodemailer';

export type ContactType = {
	from: string;
	title: string;
	content: string;
};

type MailOptionType = {
	to: string;
	from: string;
	subject: string;
	html: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_APP_EMAIL,
    pass: process.env.NEXT_APP_PWD,
  },

});