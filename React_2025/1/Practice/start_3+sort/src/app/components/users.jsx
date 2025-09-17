import React, { useState, useEffect } from "react";
import { Pagination } from './pagination';
import { paginate } from '../utils/paginate';
import { GropList } from './gropList';

import SearchStatus from "./searchStatus";
import api from '../api';
import { UserTable } from './userTable';

import _ from 'lodash';

const Users = ({ users, ...rest }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })


    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const pageSize = 8;

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

    const handleSort = (item) => {
        setSortBy(item)
    }

    const filteredUsers = selectedProf ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : users
    const count = filteredUsers.length

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])

    const userCrop = paginate(sortedUsers, currentPage, pageSize);

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
                    <UserTable
                        users={userCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}

                        {...rest}
                    />


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
