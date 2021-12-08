import React from 'react';
import { Link } from "react-router-dom";

const EmptyPage = () => {
      return (
        <>
          <h2>잘못된 접근 입니다.</h2>
          <Link to="/">돌아가기</Link>
        </>
      );
}
export default EmptyPage;