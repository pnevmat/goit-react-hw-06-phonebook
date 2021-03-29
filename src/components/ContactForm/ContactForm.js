import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    handleSubmit = () => {
        const {onSubmit} = this.props;
        onSubmit(this.state);
    }

    render() {
        return (
            <form className={styles.addContact_form} onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit();
                e.target.elements.name.value = '';
                e.target.elements.number.value = '';
                }}
            >
                <label className={styles.addContact_label} htmlFor="" name="contact">
                    <span className={styles.input_text}>Enter your name</span>
                    <input className={styles.addContact_input} type="text" placeholder="name" name="name" onChange={e => {
                      this.handleChange(e);
                  }}/>
                </label>
                <label className={styles.addContact_label}>
                    <span className={styles.input_text}>Enter your phone number</span>
                    <input className={styles.addContact_input} type="tel" placeholder="phone" name="number" onChange={e => {
                      this.handleChange(e);
                  }}/>
                </label>
                <button className={styles.addContact_button} type="submit">Add Contact</button>
            </form>
        );
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;