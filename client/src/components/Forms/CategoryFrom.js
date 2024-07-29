import React from 'react'

const CategoryFrom = ({ handleSubmit, value, setValue }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <p
                    style={{marginLeft:"5px"}} 
                    >                Enter New Category  </p>
                  
                    <input type="text"

                        className="form-control"
                        placeholder='Enter new Category'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />

                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default CategoryFrom