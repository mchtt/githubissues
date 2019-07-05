import React, { Component, Fragment } from 'react';
import axios from 'axios'
import './App.css'
import TimeAgo from 'react-timeago'

class App extends Component {

  state = {
    git: [],
    user: 'octocat',
    projectName: 'Hello-World'
  }

  componentDidMount() {
    const urlApi = `https://api.github.com/repos/${this.state.user}/${this.state.projectName}/issues`
    axios.get(urlApi).then((response) => {
      this.setState({ git: response.data })
      console.log('this.state.git', this.state.git)
    })
  }

  render() {
    return (

      <Fragment>
        
        <div className="banner">Github Issues</div>
        <div className="tableHeader row">
          <div className="tableHeaderItemsLeft">
            <span className="bold"><i className="fas fa-exclamation-circle"></i>238 Open</span>
            <span className="lead"><i className="fas fa-check"></i>1,637 Closed</span>
          </div>
          <div className="tableHeaderItemsRight">
            <span>Author<i className="fas fa-caret-down"></i></span>
            <span>Label<i className="fas fa-caret-down"></i></span>
            <span>Projects<i className="fas fa-caret-down"></i></span>
            <span>Milestones<i className="fas fa-caret-down"></i></span>
            <span>Assignee<i className="fas fa-caret-down"></i></span>
            <span>Sort<i className="fas fa-caret-down"></i></span>
          </div>
        </div>

        {this.state.git.map((item, index) => {

          return (

            <Fragment>
              <div key={index} className="table row">
                <div className="tableLeftIcon"><i className="fas fa-exclamation-circle"></i></div>
                <div>
                  <div className="tableTitle"><a href={item.html_url}>{item.title}</a></div>
                  <div className="tableInfos">
                    <span className="">#{item.number}</span>
                    <span className="">opened</span><TimeAgo date={item.created_at} />
                    <span className=""> by {item.user.login}</span>
                  </div>
                </div>
              </div>
            </Fragment>

          )
        })}
        <div className="table row">PLUS</div>
      </Fragment>
    )
  }
}

export default App