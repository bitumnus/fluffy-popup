import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../ui/Input/Input';
import { add } from '../../store/actions/actions';
import { createControl, validate, validateForm } from '../../form/formFramework';
import Button from '../../ui/Button/Button';



function createOptionControl(textLabel) {
    return createControl({
      label: `Введите ${textLabel}`,
      errorMessage: 'Значение не может быть пустым',
      id: textLabel
    }, {required: true})
}

function createFormControls() {
    return {
      word1: createOptionControl('verb'),
      word2: createOptionControl('smth'),
      word3: createOptionControl('smth2'),
    }
}

class PlayForm extends Component {
    state = {
        formControls: createFormControls(),
        isFormValid: false,
    }

    submitHandler = event => {
        event.preventDefault();
    }

    sentWords = () => {
        this.props.onAdd(this.state.formControls);
        this.props.closeModal();
    }
      
    changeHandler = (value, controlName) => {
        const formControls = this.state.formControls;
        const control = {...formControls[controlName]};;
        control.name = controlName;
        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);
        
        formControls[controlName] = control;
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }
    
    renderControls = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
          const control = this.state.formControls[controlName]
    
          return (
              <Input
                key={index}
                label={control.label}
                value={control.value}
                valid={control.valid}
                shouldValidate={!!control.validation}
                touched={control.touched}
                errorMessage={control.errorMessage}
                onChange={event => this.changeHandler(event.target.value, controlName)}
              />
          )
        })
      }
      render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    {this.renderControls()}
                    <Button type="primary" disabled={!this.state.isFormValid} onClick={this.sentWords}>Создать историю</Button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        words: state.words,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: words => dispatch(add(words)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayForm);
