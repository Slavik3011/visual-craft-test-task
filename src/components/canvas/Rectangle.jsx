import React from 'react';

export default class Rectangle extends React.Component {
    componentDidMount() {
        const canvas = this.canvas;

        let { width, height, color, delay, point } = this.props;

        if(width < 30) width = 30;
        if(height < 30) height = 30;
        if(delay < 1) delay = 10;
        if(point < 1) point = 1;

        if(width > 5000) width = 5000;
        if(height > 5000) height = 5000;
        if(delay > 10000) height = 10000;
        if(point > width) point = width;
        if(point > height) point = height;

        let dots = [];
        for(let i = 1; i <= width; i += point) {
            dots.push({x: i, y: 1}, {x: i, y: height - point})
        }

        for(let i = 1; i <= height; i += point) {
            dots.push({x: 1, y: i}, {x: width - point, y: i})
        }

        const shake = () => dots.sort(() => Math.random() - 0.5);

        shake();
        shake();
        shake();
        shake();

        canvas.width = width;
        canvas.height = height;


        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;

        dots.forEach((dot, i) => {
            setTimeout(() => {
                ctx.fillRect(dot.x, dot.y, point, point);
            }, delay * i)
        })
    }

    render() {
        return (
            <canvas ref={canvas => this.canvas = canvas} />
        )
    }
}

Rectangle.defaultProps = {
    width: 500,
    height: 500,
    color: 'red',
    delay: 30,
    point: 3
};