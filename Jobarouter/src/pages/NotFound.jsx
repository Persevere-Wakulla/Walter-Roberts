import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
          <h2>Page Not Found!</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At accusamus perferendis fuga officia reiciendis sequi mollitia modi aut, delectus eos velit hic cum inventore dignissimos sed. Tempore totam eum voluptatem.</p>

          <p>Go to the <Link to="/">HomePage</Link>.</p>
        </div>
    )
}