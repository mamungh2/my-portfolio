import { Alert, Button, Container, Grid, TextField, Typography, Box } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'mamun8475@gmail.com',
        message: '',
        reply_to: '',
        subject: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_a679mdr',
            'template_r8gpuds',
            toSend,
            'user_f0Nfx7emSxNkyz4CmNF9a'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccess(true);
                e.target.reset();
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleOnBlur = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} sx={{ margin: '0 auto' }}>
                        {success && <Alert severity="success">Message sent successfully!</Alert>}
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div" gutterBottom>
                            <Box component="span" sx={{ color: 'green', fontWeight: 'bold' }}>Contact</Box> Me
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-basic"
                                label="To"
                                variant="standard"
                                name="to_name"
                                defaultValue='mamun8475@gmail.com'
                                onBlur={handleOnBlur}
                                InputProps={
                                    { readOnly: true, }
                                }
                            />
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-basic"
                                label="Your email"
                                variant="standard"
                                name="reply_to"
                                defaultValue={toSend.reply_to}
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-basic"
                                label="Your name"
                                variant="standard"
                                name="from_name"
                                defaultValue={toSend.from_name}
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-basic"
                                label="Subject"
                                variant="standard"
                                name="subject"
                                defaultValue={toSend.subject}
                                onBlur={handleOnBlur}
                                required
                            />
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="outlined-multiline-static"
                                label="Your message"
                                multiline
                                rows={4}
                                name="message"
                                defaultValue={toSend.message}
                                onBlur={handleOnBlur}
                                required
                            />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;