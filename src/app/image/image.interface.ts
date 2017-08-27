interface ImageDTO {
  id: string,
  caption: string,
  owner: string,
  url: string
}

interface DeleteRequest {
  id: string
}

interface AddRequest {
  id: string,
  caption: string,
  url: string
}

export { ImageDTO, DeleteRequest, AddRequest };
