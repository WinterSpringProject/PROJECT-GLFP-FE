import React, { useState } from "react";
import MenuEdit from "./MenuEdit";

function Menu() {
    const [TitleValue, setTitleValue] = useState("")
    const [ContentValue, setContentValue] = useState("")
    const [IsForUpdate] = useState(false);

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    };
    console.log(TitleValue);

    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value);
    };
    console.log(ContentValue);

    const onSubmitArticle = (event) => {
        event.preventDefault();
        const article = { title: TitleValue, content: ContentValue};
        console.log(article);
    };  // article

    

    return (
        <>
            <MenuEdit
                titleValue={TitleValue}
                contentValue={ContentValue}
                handleTitleChange={onTitleChange}
                handleContentChange={onContentChange}
                handleSubmit={onSubmitArticle}
                updateRequest={IsForUpdate}
            />
        </>
    );
}


    export default Menu;


