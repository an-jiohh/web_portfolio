import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const [title, setTitle] = useState([]);
  const a = useParams();

  useEffect(() => {
    fetch(`/rest/${a.title}`, { method: "get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data.info);
      });
  }, [useParams()]);

  return (
    <main>
      <h1 class="profile-header">{title.title}</h1>
      <div class="project_img">
        <img src={`img/${title.id}/${title.id}.PNG`} alt="" />
      </div>
      <br />
      <div class="text">{title.content}</div>
      <div class="list_box">
        <div class="listflex_box">
          <div class="label">
            <i class="fa-solid fa-square-check"></i> 주요기능
          </div>
          <div>{title.detail_func}</div>
        </div>
        <div class="listflex_box">
          <div class="label">
            <i class="fa-solid fa-square-check"></i> GitHub
          </div>
          <div>
            <a href={`https://${title.detail_github}`}>detail_github</a>
          </div>
        </div>
        <div class="listflex_box">
          <div class="label">
            <i class="fa-solid fa-square-check"></i> Language
          </div>
          <div>{title.detail_language}</div>
        </div>
        <div class="listflex_box">
          <div class="label">
            <i class="fa-solid fa-square-check"></i> Environment
          </div>
          <div>{title.detail_ide}</div>
        </div>
        <div class="listflex_box">
          <div class="label">
            <i class="fa-solid fa-square-check"></i> Backgroud
          </div>
          <div>{title.detail_tech}</div>
        </div>
      </div>
      <div className="review_box">
        <form action="" method="post">
          <div class="review_info">
            <input type="text" placeholder="작성자" />
            <input type="text" placeholder="비밀번호" />
          </div>
          <textarea
            name=""
            id=""
            placeholder="여러분의 소중한 댓글을 입력해주세요"
            cols="80%"
            rows="10"
          ></textarea>
          <div class="submit_box">
            <input type="submit" value="등록" />
          </div>
        </form>
      </div>
      <div class="review">
        <div class="write_info">
          <div class="info_writer">작성자</div>
          <div class="info_date">0000.00.00 00:00</div>
        </div>
        <div class="review_main">
          콰인-매클러스키 알고리즘(Quine-McCluskey algorithm)은 논리식을
          최소화하는 알고리즘으로 카노 맵과 비슷한 논리식을 최소화하는
          알고리즘입니다. 순차, 선택, 반복을 숙달하는 한편 여러 알고리즘의
          응용해보는 프로젝트로 C언어를 이용하여 구현하였습니다. 결과 값과 함께
          화살표를 이용하여 각 단계별 풀이과정을 참고할 수 있도록
          제작하였습니다.'
        </div>
      </div>
    </main>
  );
}
