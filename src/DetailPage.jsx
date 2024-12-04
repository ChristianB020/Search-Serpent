import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import './DetailPage.css'


function DetailPage() {

    const articleName = useParams();
    const [articleData, setArticleData] = useState([]);
    const [response, setResponse] = useState('');
    const API_KEY = import.meta.env.VITE_APP_KEY; 
    useEffect(() => {
        const storedData = localStorage.getItem(`${articleName.article}`);
        if (storedData) {
            setArticleData(JSON.parse(storedData));
            localStorage.removeItem(`${articleName.article}`);

        }



    }, [articleName.article]);



    const fetchAiResponse = async () => {
        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + API_KEY
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'user', content: `Tell me more about the following heres the link : ${articleData.URL} and heres the title ${articleData.title} and ISSN is ${articleData.ISSN?.[0]}` },
                    ],
                }),
            });

            if (!res.ok) {
                console.error("API Error:", await res.json());
                return;
            }

            const data = await res.json();

            setResponse(data);




        } catch (err) {
            console.error(err);
            setResponse('Error communicating with the API');
        }
    };


    if (!articleData) {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        )
    }



    return (
        <div className="mainContainer">

            <a href="/">
                <img src="/arrow.png" alt="arrow" />
            </a>


            <div className="mainInfo">
                <h1 className="title"> {articleData.title} </h1>
                <h3> {articleData["container-title"]}</h3>

                <a
                    href={`${articleData?.URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h5>URL: {articleData.URL}</h5>
                </a>

                <h6>Publisher: {articleData?.publisher || "No publisher found"}</h6>
                <p className="genInfo">Page Number {articleData.page} </p>

                <p>Issued Date: {articleData.published?.["date-parts"][0]?.map(part => part.toString().padStart(2, '0')).join('-') || "N/A"}</p>

                <p className="geInfo" > Volume: {articleData.volume}</p>
                <p>Issue: {articleData?.issue || "N/A"}</p>
                <p> ISSN {articleData.ISSN?.[0] || "N/a"}</p>

            </div>

            <div className="secondaryInfo">
                <button onClick={fetchAiResponse}>Click For AI Summary</button>

                <div>
                    <p className="GPTResp">{response.choices?.[0]?.message?.content || "Waiting for you're click"}</p>
                </div>
            </div>
        </div>






    )
}

export default DetailPage