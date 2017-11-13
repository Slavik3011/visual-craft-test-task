import React from 'react';

export default class Matrix extends React.Component {
    constructor() {
        super();

        this.matrix = this.matrix.bind(this);
    }

    matrix() {
        let { width, height } = this.props,
            num = 1,
            rows = [];

        if(width < 1) width = 1;
        if(height < 1) height = 1;

        if(width > 100) width = 100;
        if(height > 100) height = 100;

        for(let h = 1; h <= height; h++) {
            let columns = [];

            for(let w = 1; w <= width; w++) {
                columns.push(<td key={h + '-' + w}>{num++}</td>);
            }

            if(h%2 !== 1) columns.reverse();
            rows.push(<tr key={h}>{columns}</tr>);
        }
        return rows;
    }

    render() {
        return(
            <table>
                <tbody>
                    {this.matrix()}
                </tbody>
            </table>
        )
    }
}

Matrix.defaultProps = {
    width: 6,
    height: 4
};