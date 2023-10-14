export const get_comands = async () => {
    const url = 'https://6if02t00lj.execute-api.us-east-2.amazonaws.com/prod/get_command_docker'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json();
    console.log(result);
    return result
}
