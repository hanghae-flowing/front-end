import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNode } from '../../hooks/useNode';
import { usePath } from '../../hooks/usePath';

const Path = () => {
  const nodeTableId = useSelector(state => state.post.nodeTable);

  const { data: nodeList } = useNode(nodeTableId);
  const { data: pathList } = usePath(nodeTableId);
  // console.log(pathList);

  let mergedArray = [];
  if (pathList) {
    for (let i = 0; i < pathList.length; i++) {
      let targetParentNode = pathList[i].parentNode;
      let targetChildNode = pathList[i].childNode;

      let parentNode = nodeList.find(e => e.nodeId === targetParentNode);
      let childNode = nodeList.find(e => e.nodeId === targetChildNode);

      let resultObject = {
        parent: parentNode === undefined ? 0 : parentNode,
        child: childNode === undefined ? 0 : childNode,
      };

      mergedArray.push(resultObject);
    }
  }
  // console.log(mergedArray);

  return (
    <StyledDiv>
      <svg width="100%" height="100%">
        {mergedArray.length > 0 &&
          mergedArray.map((data, index) => (
            <path
              key={index}
              d={`M${data.parent.xval} ${data.parent.yval} L ${data.child.xval} ${data.child.yval}`}
              fill="transparent"
              strokeWidth="4"
              stroke="#f3f3f3"
            />
          ))}
      </svg>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Path;
