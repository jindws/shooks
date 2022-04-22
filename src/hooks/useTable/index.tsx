/**
 * @desc table
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import "./useTable.scss";

function useTable(
  data: Record<string, unknown>[],
  options: {
    headers: {
      name: string;
    }[];
    width?: number;
    pageSize?: number;
  }
) {
  const { headers, width, pageSize = 10 } = options;
  const headNames = useMemo(() => {
    return headers.map((itm) => itm.name);
  }, [headers]);
  const [sort, setSort] = useState({ itm: "", down: true });
  const [page, setPage] = useState(1);
  const { maxPage } = useMemo(() => {
    if (pageSize) {
      return {
        maxPage: data.length / pageSize,
      };
    }
    return {
      maxPage: 1,
    };
  }, [data]);
  const getHeaders = useMemo(() => {
    return (
      <dl>
        {headNames.map((itm) => (
          <dd
            key={itm}
            style={{
              color: sort.itm === itm ? "#ccc" : "#000",
            }}
            className={sort.itm === itm ? (sort.down ? "down" : "up") : ""}
            onClick={() => {
              if (itm !== sort.itm) {
                setSort({
                  itm,
                  down: true,
                });
              } else {
                const { down } = sort;
                if (down) {
                  setSort({
                    itm,
                    down: false,
                  });
                } else {
                  setSort({ itm: "", down: true });
                }
              }
            }}
          >
            {itm}
          </dd>
        ))}
      </dl>
    );
  }, [headNames]);

  const getRows = useCallback((data: any) => {
    return (
      <ul key={data.id}>
        {headNames.map((itm, index) => (
          <li key={itm}>{data[itm]}</li>
        ))}
      </ul>
    );
  }, []);

  const getData = useMemo(() => {
    const { itm, down } = sort;

    if (itm) {
      (data as any).sort(
        (a: { [x: string]: number }, b: { [x: string]: number }) => {
          return b[itm] || 0 - a[itm] || 0;
        }
      );
      if (!down) {
        data.reverse();
      }
    }
    if (maxPage > 1) {
      let start = pageSize * (page - 1);
      return data.slice(start, start + pageSize);
    }
    return data;
  }, [data, sort]);

  const pages = useMemo(() => {
    let list = [];
    if (maxPage) {
      for (let i = 1; i <= maxPage; i++) {
        list.push(
          <span
            key={i}
            className={page === i ? "on" : ""}
            onClick={setPage.bind(null, i)}
          >
            {i}
          </span>
        );
      }
    }
    return list;
  }, [maxPage, page]);

  return (
    <section className="shooks__table" style={{ width }}>
      {getHeaders}
      {getData.map(getRows)}
      <div className="shooks__table__pages">{pages.map((itm) => itm)}</div>
    </section>
  );
}

export default useTable;
