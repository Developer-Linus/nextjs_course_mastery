export default function UserProfile({ params} : {params: {id: string }}) {
    const { id } = params;
    return <>
        <h1>User Profile</h1>
        <p>User ID: { id }</p>
    </>
}