export default function selectBook(book){
	// console.log("book has been selected", book.title);
	// selectbook is an ActionCreator, it needs to return an action,
	// an object with type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

