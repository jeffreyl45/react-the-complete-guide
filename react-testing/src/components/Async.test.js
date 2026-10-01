import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    // add async for await
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        // set a value this fetch function should resolve to when called
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'first post'}]
        });
        render(<Async/>)

        //const listItemElements = screen.getAllByRole('listitem');
        // find returns a promise unlike get

        // findAllByRole(HTML element, set exact and other properties, timeout default 1 second)
        const listItemElements = await screen.findAllByRole('listitem', {}, {});

        expect(listItemElements).not.toHaveLength(0);
    });
})