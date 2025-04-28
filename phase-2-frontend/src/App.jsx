import {Box, Button, Stack} from '@mui/material'


function App() {

    const handleClick = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/message`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json();
            if (!response.ok) {
                console.log('whoops... there was an error')
            }
            console.log('Message from the back', data.message)

        } catch (error) {
            console.error('looks like you hit the catch block, something\'s wrong');
        }



    }
    const handleGetDate = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/date');

            if (!response.ok) {
                console.error('Error fetching date');
                return;
            }

            const data = await response.json();
            console.log('Server Time:', data.time);

        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <Stack spacing={3} direction='column' sx={{ mt: 6 }}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleClick}
                        >
                            Get Message
                        </Button>

                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleGetDate}
                        >
                            Get Date
                        </Button>
                    </Stack>
            </Box>
    )
}

export default App
