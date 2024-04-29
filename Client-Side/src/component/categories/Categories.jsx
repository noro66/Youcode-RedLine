import { useState, useEffect } from 'react';
import customAxios from "../../../CustomAxios.js";
import './Categories.scss'
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({
        title: '',
        description: '',
        image: ''
    });
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [editCategory, setEditCategory] = useState({
        title: '',
        description: '',
        image: ''
    });
    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await customAxios.get('/categories');
            setCategories(response.data);
        } catch (error) {
            console.log(error);
            setMessage({ type: 'error', text: 'Failed to fetch categories' });
        }
    };

    const addCategory = async () => {
        try {
            const formData = new FormData();
            Object.entries(newCategory).forEach(([key, value]) => {
                formData.append(key, value);
            })
            await customAxios.post('/categories', formData);
            setNewCategory({ title: '', description: '', image: '' });
            await fetchCategories();
            setMessage({ type: 'success', text: 'Category added successfully' });
        } catch (error) {
            console.log(error);
            setMessage({ type: 'error', text: 'Failed to add category' });
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            await customAxios.delete(`/categories/${categoryId}`);
            fetchCategories();
            setMessage({ type: 'success', text: 'Category deleted successfully' });
        } catch (error) {
            console.log(error);
            setMessage({ type: 'error', text: 'Failed to delete category' });
        }
    };

    const updateCategory = async () => {
        try {
            const formData = new FormData();
            Object.entries(editCategory).forEach(([key, value]) => {
                formData.append(key, value);
            });
            console.log("form data : ",  formData,'edite Category :',  editCategory);
            await customAxios.post(`/categories/${editCategoryId}/update`,formData );
            setEditCategoryId(null);
            setEditCategory({ title: '', description: '', image: '' });
            await fetchCategories();
            setMessage({ type: 'success', text: 'Category updated successfully' });
        } catch (error) {
            console.log(error);
            setMessage({ type: 'error', text: 'Failed to update category' });
        }
    };

    const handleEdit = (category) => {
        setEditCategoryId(category.id);
        setEditCategory({ ...category });
    };

    const handleCancelEdit = () => {
        setEditCategoryId(null);
        setEditCategory({ title: '', description: '', image: '' });
    };

    return (
        <div className="categories">
            <div className="categories-container">
                <h2>Categories Management</h2>

                {message && (
                    <div className={`flashMessage ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <div>
                    <input type="text" value={newCategory.title}
                           onChange={(e) => setNewCategory({...newCategory, title: e.target.value})}
                           placeholder="Title"/>
                    <input type="text" value={newCategory.description}
                           onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                           placeholder="Description"/>
                    <input type="file" onChange={(e) => setNewCategory({...newCategory, image: e.target.files[0]})}/>
                    <button onClick={addCategory}>Add Category</button>
                </div>

                <ul>
                    {categories.map(category => (
                        <li key={category.id}>
                            {editCategoryId === category.id ? (
                                <div>
                                    <input type="text" value={editCategory.title}
                                           onChange={(e) => setEditCategory({...editCategory, title: e.target.value})}/>
                                    <input type="text" value={editCategory.description}
                                           onChange={(e) => setEditCategory({
                                               ...editCategory,
                                               description: e.target.value
                                           })}/>
                                    <input type="file" onChange={(e) => setEditCategory({
                                        ...editCategory,
                                        image: e.target.files[0]
                                    })}/>
                                    <button className="save" onClick={updateCategory}>Save</button>
                                    <button className="cancel" onClick={handleCancelEdit}>Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    <div>{category.title}</div>
                                    <div>{category.description}</div>
                                    <div><img src={imageFromat(category.image)} width={250} height={150} alt=""/></div>
                                    <button onClick={() => handleEdit(category)}>Edit</button>
                                    <button onClick={() => deleteCategory(category.id)}>Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Categories;
