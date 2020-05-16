import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../ui/Input/Input';
import { add } from '../../store/actions/actions';
import { createControl, validate, validateForm } from '../../form/formFramework';
import Button from '../../ui/Button/Button';



function createOptionControl(id, textLabel, value) {
    return createControl({
      label: `Введи ${textLabel}`,
      errorMessage: 'Значение не может быть пустым',
      value: value,
      id: id
    }, {required: true})
}

function createFormControls(words) {
    return {
      word1: createOptionControl(1, 'Имя твоего друга', words ? words.word1.value : ''),
      word2: createOptionControl(2, 'прилагательное (какой?)', words ? words.word2.value : ''),
      word3: createOptionControl(3, 'часть тела', words ? words.word3.value : ''),
      word4: createOptionControl(4, 'глагол (что сделал?)', words ? words.word4.value : ''),
    }
}

class PlayForm extends Component {
    state = {
        formControls: createFormControls(this.props.words),
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
