import React, { useState } from 'react';
import { Wrapper, Result, Expression, ButtonsWrapper, Button } from './styles';

const App = () => {
    const operators = ['/','*','-','+'];
    const [result, setResult] = useState(0);
    const [expression, setExpression] = useState('');
    const keys = ['1','2','3','/','4','5','6','*','7','8','9','-','0','.','C','+'];

    const onClick = label => {
        let skipEval = false;
        const isOperatorAtEnd = expression.length > 0 && operators.includes(expression[expression.length - 1]);
        const withoutOperator = isOperatorAtEnd ? expression.substring(0, expression.length - 2) : expression;
        let newExpression = '';

        switch(label) {
            case '/':
            case '*':
            case '-':
            case '+':
                skipEval = true;
                newExpression = `${withoutOperator} ${label}`;
                break;
            case 'C':
                newExpression = '';
                break;
            case '.':
                if (isOperatorAtEnd) return false;
                skipEval = true;
            default:
                newExpression = `${expression}${isOperatorAtEnd ? ' ' : ''}${label}`;
                break;
        }

        setExpression(newExpression);
        !skipEval && setResult(eval(newExpression));
    };

    return (
        <Wrapper>
            <Result>{result}</Result>
            <Expression>{expression}</Expression>
            <ButtonsWrapper>
                {keys.map((label, index) => <Button key={index} onClick={() => onClick(label)}>{label}</Button>)}
            </ButtonsWrapper>
        </Wrapper>
    );
};

export default App;
