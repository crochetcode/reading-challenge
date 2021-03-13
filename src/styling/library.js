import styled from 'styled-components';

export const LibraryStyle = styled.div`
.panel img {
  height: 200px;
  width: 150px;
  object-fit: cover;
  position: absolute;
}

.panel img:hover {
  opacity: .15;
}

.books .panel {
  height: 200px;
  width: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.books h3 {
  margin: 0 5px;
}

.white {
  background: white;
}
`