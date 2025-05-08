        document.addEventListener('DOMContentLoaded', function() {
            // Hide loader after page loads
            setTimeout(function() {
                document.getElementById('loader').style.display = 'none';
            }, 1000);

            // Sidebar Toggle
            const sidebarToggle = document.getElementById('sidebarToggle');
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');

            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                mainContent.classList.toggle('sidebar-active');
            });

            // Initialize DataTable
            $('#usersTable').DataTable({
                paging: false,
                info: false,
                searching: false
            });

            // Bulk Actions Toggle
            const bulkActionSwitch = document.getElementById('bulkActionSwitch');
            const bulkActions = document.querySelector('.bulk-actions');
            const selectAll = document.getElementById('selectAll');
            const userSelects = document.querySelectorAll('.user-select');

            bulkActionSwitch.addEventListener('change', function() {
                if (this.checked) {
                    bulkActions.style.display = 'block';
                    selectAll.disabled = false;
                    userSelects.forEach(function(checkbox) {
                        checkbox.disabled = false;
                    });
                } else {
                    bulkActions.style.display = 'none';
                    selectAll.disabled = true;
                    selectAll.checked = false;
                    userSelects.forEach(function(checkbox) {
                        checkbox.disabled = true;
                        checkbox.checked = false;
                    });
                }
            });

            // Select All Checkbox
            selectAll.addEventListener('change', function() {
                userSelects.forEach(function(checkbox) {
                    checkbox.checked = selectAll.checked;
                });
            });

            // Initialize Charts
            initializeCharts();

            // Refresh Button
            document.getElementById('refreshBtn').addEventListener('click', function() {
                // Show loader
                document.getElementById('loader').style.display = 'flex';
                
                // Simulate data refresh
                setTimeout(function() {
                    document.getElementById('loader').style.display = 'none';
                    alert('Data refreshed successfully!');
                }, 1500);
            });

            // Export Buttons
            document.getElementById('exportCSV').addEventListener('click', function() {
                alert('Exporting data to CSV...');
            });

            document.getElementById('exportExcel').addEventListener('click', function() {
                alert('Exporting data to Excel...');
            });

            document.getElementById('printData').addEventListener('click', function() {
                alert('Preparing data for printing...');
            });

            // Save Settings Button
            document.getElementById('saveSettings').addEventListener('click', function() {
                // Show loader
                document.getElementById('loader').style.display = 'flex';
                
                // Simulate saving settings
                setTimeout(function() {
                    document.getElementById('loader').style.display = 'none';
                    alert('Settings saved successfully!');
                }, 1500);
            });

            // Logout Button
            document.getElementById('logoutBtn').addEventListener('click', function() {
                if (confirm('Are you sure you want to logout?')) {
                    alert('Logged out successfully!');
                }
            });
        });

        // Initialize Charts
        function initializeCharts() {
            // Registration Trend Chart
            const registrationCtx = document.getElementById('registrationChart').getContext('2d');
            const registrationChart = new Chart(registrationCtx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'New Registrations',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: 'rgba(67, 97, 238, 0.1)',
                        borderColor: 'rgba(67, 97, 238, 1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            // Status Distribution Chart
            const statusCtx = document.getElementById('statusChart').getContext('2d');
            const statusChart = new Chart(statusCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Pending', 'Approved', 'Rejected'],
                    datasets: [{
                        data: [342, 856, 50],
                        backgroundColor: [
                            '#ff9500',
                            '#28a745',
                            '#dc3545'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    cutout: '70%'
                }
            });

            // Time of Day Chart
            const timeOfDayCtx = document.getElementById('timeOfDayChart').getContext('2d');
            const timeOfDayChart = new Chart(timeOfDayCtx, {
                type: 'bar',
                data: {
                    labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
                    datasets: [{
                        label: 'Registrations',
                        data: [250, 420, 380, 190],
                        backgroundColor: 'rgba(67, 97, 238, 0.8)',
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            // Path Distribution Chart
            const pathDistributionCtx = document.getElementById('pathDistributionChart').getContext('2d');
            const pathDistributionChart = new Chart(pathDistributionCtx, {
                type: 'pie',
                data: {
                    labels: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                    datasets: [{
                        data: [540, 325, 480, 290],
                        backgroundColor: [
                            'rgba(67, 97, 238, 0.8)',
                            'rgba(58, 12, 163, 0.8)',
                            'rgba(76, 201, 240, 0.8)',
                            'rgba(255, 149, 0, 0.8)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });

            // Conversion Funnel Chart
            const conversionFunnelCtx = document.getElementById('conversionFunnelChart').getContext('2d');
            const conversionFunnelChart = new Chart(conversionFunnelCtx, {
                type: 'bar',
                data: {
                    labels: ['Visited Form', 'Started Form', 'Completed Step 1', 'Completed Step 2', 'Completed Step 3', 'Finalized'],
                    datasets: [{
                        label: 'Users',
                        data: [1800, 1500, 1200, 950, 800, 685],
                        backgroundColor: [
                            'rgba(67, 97, 238, 0.3)',
                            'rgba(67, 97, 238, 0.4)',
                            'rgba(67, 97, 238, 0.5)',
                            'rgba(67, 97, 238, 0.6)',
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(67, 97, 238, 0.8)'
                        ],
                        borderRadius: 5
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }