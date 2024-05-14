import React from "react";

function GamesTable(props) {
    const { games, isLoading, isError} = props;
    /* INSTRUCTION: Show "loading..." when isLoading is true */
    if (isLoading) {
        return <div>Loading...</div>;
    }
    /* INSTRUCTION: Show "error" when isError is true */
    if (isError) {
        return <div>Error: Failed to fetch Pokémon data.</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genres</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {/* INSTRUCTION: if games data is available, display the games in a table. if not, display a "No games found." message */}
                {games.length > 0 ? (
                games.map(game => (
                    <tr key={game.title}>
                        <td>{game.title}</td>
                        <td>{game.genres + ""}</td>
                        <td>{game.rating}</td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td>No games found.</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default GamesTable;
