import React, { Component } from 'react';
import Logo from '../Header/Logo/Logo';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(_) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        display: 'flex',
                        'flex-direction': 'column',
                        'justify-content': 'center',
                        'align-items': 'center',
                        'min-height': 'calc(100vh - 40px)',
                        'min-width': 'calc(100vw - 40px)',
                        padding: '20px',
                    }}
                >
                    <Logo />
                    <h4
                        style={{
                            margin: '30px 0 0 20px',
                            'text-align': 'justify',
                            padding: '20xp',
                        }}
                    >
                        Sorry, something occurs an error, please click the link bellow and you will
                        be redirected to the main page
                    </h4>
                    <a
                        href="/"
                        style={{
                            color: 'blue',
                            'text-decoration': 'underline',
                            margin: '20px 7px',
                            'font-size': '24px',
                        }}
                    >
                        To the main page
                    </a>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
