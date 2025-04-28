import {Box, Button} from '@mui/material'


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


    return (
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button
                variant='contained'
                color='primary'
                onClick={handleClick}
            >
                Click it
            </Button>
        </Box>
    )
}

export default App
