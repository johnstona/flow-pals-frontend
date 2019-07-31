import React, { useState, useEffect } from 'react'
import './Project.css'
import '../../script.js'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"// Both at the same time
import Draggable from "gsap/Draggable"
import { updateExpression } from '@babel/types';


class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      content: ''
    }

    this.projectContainer = React.createRef();
  }

  handleProjectChange = (e) => {
    this.setState({content: e.target.innerHTML})
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  addFlowElement = () => {
    const el = `
        <div class="drag shadow bg-white flow-box rounded p-2 text-white ls-2" contenteditable="true">
          <p class="p-4 bg-blue-300" contenteditable="true">
            type your text here
          </p>
        </div>
      `

      this.projectContainer.current.innerHTML += el
      Draggable.create(".drag")

      const flow = document.querySelectorAll('.flow-box')
      flow.forEach(box => {
        box.addEventListener('click', this.handleProjectChange, true)
      })
    }

  updateProject() {
    this.props.updateProject(this.props.project, this.state.name, this.state.content)
    this.props.saveProject(this.props.project.id, this.state.name, this.state.content)
  }

  render() {
    return (
    <div className="project-wrapper">
      <input class="project__title font-bold"
        data-id="h1"
        onChange={this.handleNameChange}
        value={ this.state.name }
      />
    <div class="project bg-gray-100" data-id="project" ref={this.projectContainer} onChange={this.handleProjectChange}>
        { this.state.content }
      </div>
      <div className="project__controls">
        <button onClick={() => this.addFlowElement()} className="font-bold text-white bg-pink-300 border-b-4 border-pink-400 rounded p-2 mt-2 mr-2">ADD ELEMENT</button>
      <button onClick={() => this.updateProject()} className="font-bold text-white bg-pink-300 border-b-4 border-pink-400 rounded p-2 mt-2 mr-2">SAVE PROJECT</button>
      </div>
    </div>
  )}
}

export default Project

// const Project = ({ project, collaborators, saveProject, updateProject }) => {
//
//   const [content, setContent] = useState(project.content)
//   const [name, setName] = useState(project.name)
//   let projectContainer = React.createRef()
//   let selectedBox
//   let timer
//
//   const handleHeaderChange = e => {
//
//     setName(e.target.value)
//     updateProject(project, name, content)
//     // clearInterval(timer)
//     // timer = setTimeout(saveProject(project.id, e.target.value, content), 500)
//   }
//
//   // const handleProjectChange = () => {
//   //   const val = projectContainer.current.innerHTML;
//   //   saveProject(project.id, name, projectContainer.current.innerHTML)
//   // }
//
//   const addFlowElement = () => {
//   const el = `
//       <div class="drag shadow bg-white flow-box rounded p-2 text-white ls-2" contenteditable="true">
//         <p class="p-4 bg-blue-300" contenteditable="true">
//           type your text here
//         </p>
//       </div>
//     `
//
//     projectContainer.current.innerHTML += el
//     Draggable.create(".drag")
//
//     const flow = document.querySelectorAll('.flow-box')
//     flow.forEach(box => {
//       box.addEventListener('click', handleProjectChange, true)
//     })
//   }
//
//   const editFlowElement = (e) => {
//     return setName(e.target.value)
//   }
//
//   useEffect(() => {saveProject(project.id, name, content)}, [content, name, project.id, saveProject])
//
//   const handleProjectChange = e => {
//     setContent(e.target.innerHTML)
//   }
//
//
//   return (
//     <div className="project-wrapper">
//       <input class="project__title font-bold"
//         data-id="h1"
//         onChange={handleHeaderChange}
//         value={ project.name }
//       />
//     <div class="project bg-gray-100" data-id="project" ref={projectContainer} onChange={handleProjectChange}>
//         { project.content }
//       </div>
//       <div className="project__controls">
//         <button onClick={() => addFlowElement()} className="font-bold text-white bg-pink-300 border-b-4 border-pink-400 rounded p-2 mt-2 mr-2">ADD ELEMENT</button>
//         <button onClick={() => editFlowElement()}className="font-bold text-white bg-pink-300 border-b-4 border-pink-400 rounded p-2 mt-2 mr-2">EDIT ELEMENT</button>
//       </div>
//     </div>
//   )
// }
//
// export default Project
