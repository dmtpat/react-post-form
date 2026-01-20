import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isPublic, setIsPublic] = useState(false)

  function titleChange(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }
  const [article, setArticle] = useState({
    author: "Pippo",
    title: "",
    body: "",
    public: false
  }
  )


  return (
    <>
      <h1>Nuovo articolo</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="card col-6">
            <h2>{title} <span class="badge rounded-pill text-bg-primary">is public: {isPublic}</span></h2>
            <h6 class="card-subtitle mb-2 text-body-secondary">{author}</h6>
            <p>
              {body}
            </p>
          </div>
          <div className='col-6'>
            <form action="">
              <div className="container-flex">
                <div className="row g-2">
                  <div className="col">
                    <label htmlFor="titleInput" className='form-label'>Titolo</label>
                    <input name="title" value={title} type="text" placeholder='Titolo' className='form-control' onChange={titleChange} />
                  </div>
                  <div className="col">
                    <label htmlFor="authorInput" className='form-label'>Autore</label>
                    <input name="author" value={article.author} type="text" placeholder='Autore' className='form-control' />
                  </div>
                  <div className="col-12">
                    <label htmlFor="articleInput" className='form-label'>Corpo dell'articolo</label>
                    <textarea name="body" value={body} id="body" rows={5} placeholder="Inserisci qui l'articolo" className='form-control' ></textarea>
                  </div>
                  <div className="col-12">
                    <label htmlFor="isPublic" className='form-label'>Selezionare per rendere pubblico </label>
                    <input type="radio" value={isPublic} name="isPublic" id="isPublic" className='form-check-input mx-2' />
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
