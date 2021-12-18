const Create = () => {
    return (
<section id="create-page" className="auth">
    <form id="create">
        <div className="container">

            <h1>Create Publication</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter your fish..." />

            <label for="category">Place:</label>
            <input type="text" id="category" name="category" placeholder="Enter your place..." />

            
            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

            <label for="description">description:</label>
            <textarea name="description" id="description"></textarea>
            <input className="btn submit" type="submit" value="Create" />
        </div>
    </form>
</section>       
    );
};

export default Create;