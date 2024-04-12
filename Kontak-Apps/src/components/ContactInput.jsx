import React from "react";

export default class ContactInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tag: ''
        }
        this.onNameEvenHeadler = this.onNameEvenHeadler.bind(this)
        this.onTagEvenHedler = this.onTagEvenHedler.bind(this)
        this.onSubmitHeadler = this.onSubmitHeadler.bind(this)
    }
    onNameEvenHeadler(even){
        this.setState(() =>{
            return {
                name: even.target.value,
            }
        })
    }
    onTagEvenHedler(even) {
        this.setState(() => {
            return {
                tag: even.target.value,
            }
        })
    }
    onSubmitHeadler(even) {
        even.preventDefault()
        this.props.addContct(this.state)
    } 
    render() {
        return (
          <form className='contact-input' onSubmit={this.onSubmitHeadler}>
            <input type="text" placeholder="Nama" onChange={this.onNameEvenHeadler} value={this.state.value}/>
            <input type="text" placeholder="Tag" onChange={this.onTagEvenHedler} value={this.state.value}/>
            <button type="submit">Tambah</button>
          </form>
        )
      }
}