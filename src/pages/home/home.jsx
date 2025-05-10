import React, { Component } from 'react'
import { is, fromJS } from 'immutable'
class Home extends Component {
  state = {
    name: '-'
  }
  componentWillMount() {
    // 组件初始化时调用，更新不调用，整个生命周期只有一次，可以修改state
    this.setState({
      name: 'hello world'
    })
  }
  componentDidMount() {
    // 组件渲染之后调用，只调用一次
    console.log('componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    // 组件初始化不调用，组件接收新的props时调用
  }
  componentWillUpdate(nextProps, nextState) {
    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  }
  componentDidUpdate() {
    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点
  }
  componentWillUnmount() {
    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 组建判断是否需要重新渲染时调用
    return !is(fromJS(this.props), fromJS(nextProps)) || is(fromJS(this.state), fromJS(nextState))
  }
  deal = (val) => {
    console.log(val)
    alert(val)
    this.setState({
      name: val
    })
  }

  jump = (val) => {
    console.log('jump')
    console.log(val)

    this.props.history.push("/record")
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>{name}</div>
        <button onClick={this.deal.bind(this,'hi event click')}>onClick</button>

        <hr></hr>
        <div>
          页面跳转 - 点击
          <button onClick={this.jump.bind(this,'click')}>跳转</button>
        </div>
        

      </div>
    )
  }
}
export default Home
