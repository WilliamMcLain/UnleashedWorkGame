import ForgeUI, { 
    render, QueuePage, Fragment, Text 
} from '@forge/ui';

const App = () => {
    return (
        <Fragment>
            <Text>Hello world!</Text>
        </Fragment>
    );
};

export const run = render(
    <QueuePage>
        <App />
    </QueuePage>
);
