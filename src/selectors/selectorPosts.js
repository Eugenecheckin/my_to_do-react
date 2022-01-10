
export const postsSelector = (state) => { 
  return state.tasks 
};
export const postsSelectedSelector = (state) => {   
  return state.tasks.filter(( item ) => { 
                                          if ( item.checked === true ) {
                                            return true;
                                          } 
                                        }
                           ); 
};
export const postsUnselectedSelector = (state) => {   
  return state.tasks.filter(( item ) => { 
                                          if ( item.checked === false ) {
                                            return true;
                                          } 
                                        }
                           ); 
};