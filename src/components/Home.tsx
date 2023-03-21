import { useState } from "react";

function Home(): JSX.Element {
  const [listVisible, setListvisible] = useState<Boolean>(false);
  const [listVisible2, setListvisible2] = useState<Boolean>(false);
  const [title, setTitle] = useState<String>("");
  const [titleList, setTitleList] = useState<string[]>([]);
  type Title = string;
  type TitleList = Title[];

  const handleButton = (): void => {
    if (listVisible === true) {
      setListvisible(false);
    } else {
      setListvisible(true);
    }
  };
  const handleOnSearch = (): void => {
    setListvisible(false);
    setListvisible2(true);
  };
  const handleInvite = (title: Title): void => {
    setTitleList((prevState: TitleList) => {
      return [...prevState, title];
    });
    setTitle("");
  };
  return (
    <>
      <div>
        <button onClick={handleButton}>Share</button>
      </div>
      {listVisible && (
        <div
          className="container"
          style={{ border: "2px solid", width: "400px", height: "200px" }}
        >
          <h3>Getting Started</h3>
          <div>
            <button onClick={handleOnSearch}>
              <input type="text" />
            </button>
            <button>Invite</button>
          </div>
        </div>
      )}
      {listVisible2 && (
        <div
          className="container"
          style={{ border: "2px solid", width: "400px", height: "200px" }}
        >
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => handleInvite(title)}>Invite</button>
            <ul>
              {titleList.map((item: String, i: Number) => {
                return (
                  <li key={i} style={{ listStyleType: "none" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "10px",
                      }}
                    >
                      {item}

                      <select
                        name=""
                        id=""
                        // onClick={(e) =>
                        //   setFilterParam((e.target as HTMLSelectElement).value)
                        // }
                      >
                        <option value="title">Full access</option>
                        <option value="episode_id">Can edit</option>
                        <option value="release_date">Can comment</option>
                        <option value="release_date">Can view</option>
                      </select>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
