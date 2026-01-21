import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  // const [author, setAuthor] = useState("")
  // const [title, setTitle] = useState("")
  // const [body, setBody] = useState("")
  // const [isPublic, setIsPublic] = useState(false)

  // function titleChange(e) {
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  //}
  const [article, setArticle] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  }
  )
  function articleChange(e) {
    const newArticle = { ...article };
    console.log(e.target.name);
    newArticle[e.target.name] = e.target.value;
    setArticle(newArticle);
  }

  return (
    <>
      <h1>Nuovo articolo</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="card col-6">
            <h2>{article.title} <span className="badge rounded-pill text-bg-primary">is public: {article.public}</span></h2>
            <h6 className="card-subtitle mb-2 text-body-secondary">{article.author}</h6>
            <p>
              {article.body}
            </p>
          </div>
          <div className='col-6'>
            <form action="">
              <div className="container-flex">
                <div className="row g-2">
                  <div className="col">
                    <label htmlFor="titleInput" className='form-label'>Titolo</label>
                    <input name="title" value={article.title} type="text" placeholder='Titolo' className='form-control' onChange={articleChange} />
                  </div>
                  <div className="col">
                    <label htmlFor="authorInput" className='form-label'>Autore</label>
                    <input name="author" value={article.author} type="text" placeholder='Autore' className='form-control' onChange={articleChange} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="articleInput" className='form-label'>Corpo dell'articolo</label>
                    <textarea name="body" value={article.body} id="body" rows={5} placeholder="Inserisci qui l'articolo" className='form-control' onChange={articleChange} ></textarea>
                  </div>
                  <div className="col-12">
                    <label htmlFor="isPublic" className='form-label'>Selezionare per rendere pubblico </label>
                    <input type="radio" value={article.public} name="public" id="public" className='form-check-input mx-2' />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
