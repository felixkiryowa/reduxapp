import React from 'react';


class ExampleComponent extends React.Component {
    constructor()  {
        super();

        this.state = {
            articles: [
                { title: "React Redux Tutorial for Beginners", id: 1 },
                { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
              ]
        }
    }

    render() {

        const courses  = this.state.articles.map(course => {
            return <ul>
                <li key={course.id}>{course.title}</li>
            </ul>
        })
        return (
            <div>
                {courses}
            </div>
        )
    }
}

export default ExampleComponent;