import React, { useState, useEffect } from "react";
import User from "./user";
import { Pagination } from './pagination';
import { paginate } from '../utils/paginate';
import { GropList } from '../gropList';
import SearchStatus from "./searchStatus";
import api from '../api';

const Users = ({ users, ...rest }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const pageSize = 2;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleNextPage = (success) => {
        setCurrentPage((prev) => prev + 1)
    }
    const handlePrevPage = (success) => {
        success && setCurrentPage((prev) => prev - 1)
    }

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)

    }

    const filteredUsers = selectedProf ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : users
    const count = filteredUsers.length

    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf()
    }

    return (
        <div className='d-flex'>
            {professions &&
                <div className='d-flex flex-column flex-shrink-0 p-3'>
                    <GropList
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                        valuePropery='_id'
                        contentProperty='name'
                        selectedItem={selectedProf}
                    />
                    <button className='btn btn-secondary mt-2' onClick={clearFilter}>Очистить</button>
                </div>
            }

            <div className="d-flex flex-column w-100">
                <SearchStatus length={count} />
                {count > 0 && (


                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Провфессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => (
                                <User key={user._id} {...rest} {...user} />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">

                    <Pagination
                        itemCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                        onHandleNextPage={handleNextPage}
                        onHandlePrevPage={handlePrevPage}
                    />
                </div>
            </div>


        </div>
    );
};

export default Users;
