import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {  balance: 0,
                    rate: 0,
                    term: 15,
                    output: 0}; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = parseFloat(target.value);

    this.setState({
      [name] : value
    });
  };


  handleSubmit(event) {
    event.preventDefault();
    let p = this.state.balance;
    let r = this.state.rate * .01 / 12
    let t = this.state.term * 12;
    let m;
    m = p * r * (Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    m = m.toFixed(2)

    this.setState({
      output : m
    });
  }


  
  render() {
    return (
      <div className='container'>
        <h3>Mortgage Calculator</h3>
        <form className="form-horizontal">
          <div className="form-group form-groupr-lg">
            <label className="col-sm-2 control-label">Loan Balance</label>
            <div className="col-sm-10">
              <input name="balance" type="number" className="form-control" onChange={this.handleChange} id="inputEmail3"  placeholder="Loan Balance" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Interest Rate (%)</label>
            <div className="col-sm-10">
              <input name="rate" type="number" step="0.01"className="form-control" onChange={this.handleChange} id="inputPassword3"  placeholder="Interest Rate" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Loan Term</label>
            <div className="col-sm-10">
              
              <select name="term" className="form-control" onChange={this.handleChange}>
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary" name="submit" onClick={this.handleSubmit} type="submit">Calculate</button>
        </form>
        <div>
          <h1 name="output">${this.state.output} is your payment</h1>
        </div>
      </div>
    );
  }
}




