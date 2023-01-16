import React, { Component } from 'react';
import { Form,Button} from 'react-bootstrap';
import { withTranslation, Trans } from 'react-i18next';

import './ProductForm.css';
const name = React.createRef();
const sku = React.createRef();
const count = React.createRef();

class ProductForm extends Component  {
  constructor(){
    super()
    this.state = {
      name: '',
      sku: '',
      amount: ''
    }
  }
  handleNameChange = (e) => {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }
  handlesubmit(event){
    event.preventDefault();
    this.props.handlesubmit(name.current.value,sku.current.value,count.current.value || undefined)
  }
  render(){
    const { t, i18n } = this.props;

  return (
    <>

       
    
    <Form onSubmit={this.handlesubmit.bind(this)}>
      <Form.Group controlId="formBasicName">

        <Form.Label>{t('name')}</Form.Label>
        <Form.Control ref={name} type="text" placeholder={t('writename')} defaultValue={this.props.product.name || undefined} />

      </Form.Group>

      <Form.Group controlId="formBasicSKU">
        <Form.Label>{t('sku')}</Form.Label>
        <Form.Control ref={sku} type="text"  placeholder={t('sku')}  defaultValue={this.props.product.sku || undefined} />
      </Form.Group>
      <Form.Group controlId="formBasicCount">
        <Form.Label>{t('amount')}</Form.Label>
        <div class="quantity-wrapper">
        <Form.Control ref={count} type="number" min="0" max="100" placeholder={t('amount')} defaultValue={this.props.product.amount || undefined} />
        </div>
      </Form.Group>
      {this.props.type === "edit" && <Button className="Button" onClick={() => this.props.handleDelete(this.props.product.id)}>{t('delete')}</Button>}
      <Button className="Button" onClick={this.handlesubmit.bind(this)} variant="primary" type="submit">{t('send')}</Button>
    </Form>
    </>
  );
}
}
ProductForm.defaultProps = {
    product: {
        amount: '',
        count: '',
        sku:''
    },
    type:'new'
};
export default withTranslation('translations')(ProductForm);
